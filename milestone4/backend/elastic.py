from elasticsearch_dsl import Index, Document, Text, Keyword, analyzer, tokenizer
from elasticsearch_dsl.connections import connections
from elasticsearch import Elasticsearch
import pandas as pd
from nltk import word_tokenize
import nltk
nltk.download("stopwords")
nltk.download("punkt")
# nltk.download("all")


text_analyzer = analyzer("text_analyzer", tokenizer="classic", filter=["lowercase","stop"])

class TextDocument(Document):
    question = Text(analyzer=text_analyzer)
    answer = Text(analyzer=text_analyzer)

def check_index(es, path, index_name):
    """
    check if index exists

    Params:
    es:
        elastic search object
    path:
        file path for data
    index_name:
        name of index to check if it exists

    Returns:
        boolean True or False
    """
    hosts = []
    hosts.append(path)
    connections.create_connection(hosts=hosts)
    if not es.indices.exists(index_name):
        return True
    else:
        return False

def create_index(es, path, index_name, data):
    """
    creates an index after checking if it does not exist

    Params:
    es:
        elastic search object
    path:
        file path for data
    index_name:
        index_name on which to create an index 
        (which is a column in the dataframe from data)
    data:
        dataframe on which to create an index based on index_name

    Returns:
        an Index object on the column passed as index_name
    """
    if not check_index(es, path, index_name=index_name):
        stack_index = Index("stackexchange")
        stack_index.document(TextDocument)
        stack_index.create()
        for index, row in data.iterrows():
            ans_text = row["Answer"]
            ques_text = row["Quesetion"]
            doc = TextDocument(answer=ans_text, question=ques_text)
            doc.meta.id = index
            doc.save()
        return stack_index
    else:
        return Index(index_name)

def elastic_search(index_object, data, search_text):
    """
    calls elastic search as imported above

    Params:
    index_object:
        Index object passed from create_index
    data:
        dataframe containing the raw data
    search_text:
        keyword or string literal to search dataframe 

    Returns:
        a pandas dataframe based on the filter of 
        indexes searched on input search_text above
    """
    indexes = []
    search_text = word_tokenize(search_text)
    s = index_object.search().query()
    update = {'search_text': {'bool': {'should': []}}}
    for word in search_text:
        update["search_text"]["bool"]["should"].append({"match": {"text": word}})
    s.update_from_dict(update)
    responses = s.execute()
    for response in responses:
        indexes.append(int(response.meta.id))
    return data.filter(items=indexes, axis=0)