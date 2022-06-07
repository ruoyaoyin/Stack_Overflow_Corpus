import uvicorn
import csv, sys
from fastapi import FastAPI
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import nltk
nltk.download("brown")
nltk.download("universal_tagset")
from nltk.corpus import brown
from collections import defaultdict
import numpy as np
import pandas as pd
from random import random

app = FastAPI()

@app.get("/filter", tags=["filter"])
async def search(search_text='', 
                classification='', 
                complexity='', 
                directness='', 
                question=True, 
                answer=True) -> dict:
    """
    calls the filter function
    to return query results
    from corpus based on filters

    Params:
    fields:
        object of query fields

    Returns:
        a pandas dataframe as output results
    """
    df=pd.read_csv('data/final_annotations.csv') 
    if question==False:
        search_question=''
    else:
        search_question=search_text
    if answer==False:
        search_answer=''
    else:
        search_answer=search_text
    results=df.dropna()[(df.dropna()['Question'].str.contains(search_question.lower()) | 
                    df.dropna()['Answer'].str.contains(search_answer.lower())) &
                    df.dropna()['Classification'].str.contains(classification.lower()) &
                    df.dropna()['Complexity'].str.contains(complexity.lower()) &
                    df.dropna()['Directness'].str.contains(directness.lower())]
    
    return {'data': results.to_dict('records')}

@app.get("/{filename}")
def pass_file(filename):
    return FileResponse(filename)

@app.get("/", tags=["root"])
def start():
    return {"message": "Welcome to your corpus backend."}

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=9999, debug=True)