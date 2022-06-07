# coding=utf8
import uvicorn
import csv, sys
from fastapi import FastAPI
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from random import random
from load import Load
from elastic import check_index, create_index, elastic_search
from elasticsearch import Elasticsearch

INDEX_NAME = 'stack_exchange'
FILE_PATH = 'data/final_annotations.csv'
app = FastAPI()
load_data = Load()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/search", tags=["search"])
async def search(search_text='') -> dict:
    """
    calls the search function
    to return query results
    from corpus based on filters

    Params:
    fields:
        object of query fields

    Returns:
        a pandas dataframe as output results
    """
    # df=pd.read_csv(FILE_PATH) 
    df=load_data.load(FILE_PATH, search_text)
    return {'data': df.dropna().to_dict('records')}

@app.get("/{filename}")
def pass_file(filename):
    """
    passes a file as defined in endpoint

    Params:
    filename:
        name of file to render to frontend

    Returns:
        html document of type FileResponse object
    """
    return FileResponse(filename)

@app.get("/", tags=["root"])
def start():
    """
    root path to start the corpus backend

    Params:
    none

    Returns:
        confirmation message to load the corpus backend
    """
    return {"message": "Welcome to your corpus backend."}

@app.get("/elastic")
def elastic_search(keyword):
    """
    calls the elastic search function
    to return corpus query results
    to later be modified based on filters

    Params:
    keyword:
        keyword to filter for elastic search

    Returns:
        dataframe based on the search_text of input keyword
    """
    es = Elasticsearch()
    index = create_index(es, FILE_PATH, INDEX_NAME, search())
    clean_data = elastic_search(index, search(), search_text=keyword)
    return clean_data

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=9999, debug=True)