import csv
import os,sys
import pandas as pd

class Load:
    @classmethod
    def load(self, path, text):
        """
        Loads a spreadsheet as pandas dataframe

        Params:
        path:
            File path
        text:
            optional keyword passed in as filter criteria
            (this version is obselete and now longer used)
            (check updated option 2 for reference)
        
        Return: 
            pandas dataframe
        """
        # option 1: read the csv row by row into an array
        # this is very inefficient, leaving for reference
        results=[]
        try:
            with open(path, newline='') as f:
                reader = csv.reader(f)
                for row in reader:
                    if text in row:
                        print(row)
                        results.append(row)
        # avoid return because we prefer to use faster option 2 below
        # error handling in case the csv.reader does not work on file
        except csv.Error as e:
            sys.exit('file {}, line {}: {}'.format(path, reader.line_num, e))
        
        # option 2: return a pandas dataframe via read_csv
        try:
            return pd.read_csv(path)
        except Exception as e:
            raise Exception('file {}: {}'.format(path, e))