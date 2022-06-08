## Team members

- Mohammad Ahsan Ghani 
-  Jeremy Yang     
-  Oksana Necio    
-   Ruoyao Yin


Milestone 1:
- proposal (milestone1/proposal_group1.md)
- proof of concept
    - api for meta (milestone1/api)
    - scraper for posts (milestone1/scraper)
    
Milestone 2:
- scraper (milestone2/scraper/scraper.ipynb)
- corpus data (milestone2/scraper/run1, run2, run3)
- corpus explanation (milestone2/corpus_readme.md)
- annotation plan (milestone2/Annotation_Plan_group1.md)
- annotation materials (milestone2/annotation_materials.md)

Milestone 3:
- annotation (all annotations) (milestone3/data/Annotation_Mastersheet.csv)
- annotation (aggregated annotations) (milestone3/data/final_annotations.csv)
- explanation (milestone3/Annotation_Explanation_group1.md)
- code (data preproc) (milestone3/data_preproc.ipynb)
- code (annotation aggregation) (milestone3/annotation_aggregate.ipynb)
- interannotator agreement study (milestone3/agreement_study.md)
- experimenting with annotation options (milestone3/Annotation_Options.md)
- plan for the interface (milestone3/Interface_Design.md)

Milestone 4:
- Python back-end (milestone4/backend)
- HTML/javascript front-end (milestone4/frontend)
- Docker file (milestone4/docker_compose.yml)


## Instructions Through Github

- Launch Docker from Desktop icon
- In your terminal, enter the following:
 ``` git clone https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1_public.git ```
 - Next, change your directory to the project directory:
 ``` cd COLX_523_Group1_public ```
- Run the following command (this may take some time): 
``` docker-compose up ```
- Once this is complete, open your internet browser and go to ```localhost:3000``` 

## Instructions Through Image Download

- Launch Docker from Desktop icon
- Download ```group1_img.tar``` from Google Drive
- In your terminal, enter the following:
``` docker load -i group1_img.tar```
- Run the following command (this may take some time): 
``` docker-compose up ```
- Once this is complete, open your internet browser and go to ```localhost:3000``` 

## The website

- Once you are on the website, you can search Stack Overflow Question-Answer pairs.
- You can choose to show only the questions, answers, or both.
- In the search box, you can enter keywords (ex. numpy, dicts, etc.)
- The 'Text Classification' dropdown is used to select what category of posts to search through.
- The 'Complexity Classification' dropdown is used to select the complexity of of the question.
- The 'Directness Classification' dropdown is used to select if the answer is directly answering the question or if the answer refers or adds on to another answer.

- Once you are finished exploring the website, you can close the browser and type ```ctrl + c``` in your terminal to shut it down. 

