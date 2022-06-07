# Annotation Explanation

| Team member | Student number  |
| :--: | :--: |
| Mohammad Ahsan Ghani | 82873100 |
|   Jeremy Yang    |  57353781   |
|  Oksana Necio    |  75493593  |
|   Ruoyao Yin   | 59004859  |

## Annotation and Related Code (See README.md)
* Annotation (all annotations) (milestone3/data/Annotation_Mastersheet.csv)
[Annotation_Mastersheet](https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone3/data/Annotation_Mastersheet.csv/)
* Annotation (aggregated annotations) (milestone3/data/final_annotations.csv)
[Final annotation](https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone3/data/final_annotations.csv/)
* code (data preproc) (milestone3/data_preproc.ipynb)
[Preparation code](https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone3/data_preproc.ipynb)
* code (annotation aggregation) (milestone3/annotation_aggregate.ipynb) 
[Conversion code](https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone3/annotation_aggregate.ipynb)

## Annotation Steps
Code preprocessing:
1. load csv file and check how many documents we get
2. filter data and keep answers whose length are longer than 20 (about 1/3 are kept)
3. check out basic information about questions and answers. For example, the min, max, and mean of their length

Annotating:
1. read some documents and generate 3 lists of possible values for different annotations (or features). For "text classification" annotation, we come up with around 20 words like "data structure," "environment," and "operator" based on the topic of question-answer pairs. For "complexity" annotation, we generate "beginner," intermediate," "advanced," and "expert" based on the learning stage of the person who asks the question. If they are at beginner level, they may curious about questions like "what is function"; at intermediate, questions may be about object or classes; at advanced stage, they may not only satisfied with completeness of task but also its efficiency and quality. We also have "expert" label in case there are question-answer pairs which are beyond us. For "directness" annotation, we create "direct," "reference," and "adding on" correspond to direct answers, answers refer to other resources, and direct answers but based on previous answers.
2. individual team member annotate 500 by themselves and each documents have two people to take care of based on lists of possible values we generated before 

Aggregating annotation:
1. after we get each member's individual annotation task done, we meet and compare our annotation
2. decide final annotation. For "text classification" annotation, because it is reasonable to have more than one labels for a document, we keep all annotations. For "complexity" annotation, if we encounter different annotations, we think it is better to label it higher than lower. From our inspection, we realize that most complexity labels are "beginner" or "intermediate." To balance out this bias towards easier annotations a bit, we decide to keep labels with higher complexity. For "directness" annotation, if we see difference between direct and indirect ones, we typically choose indirect cause there is a tendency to label documents direct.

Code for aggregation annotation:
1. slice out questions and answers for final output
2. select all the annotation columns to be aggregated
3. because for each document (a question-answer pair), we annotate three features. when aggregating the annotations, we would want to treat them seperately. Therefore our next step is to seperate and combine those columns according to the annotation feature
4. after aggregating all features, we combine them with the question-answer pairs to generate the final output 


## Brief Discussion
We decided on three annotations: text classification, post complexity, and directness (whether or not the answer directly addressed the question or added on to previous answers or referenced from other resource). 
* For text classification, we have different labels and do not agree on all of the question-answer pairs when aggregate our annotations (every pair will have two team members to label). After our discussion, we think it is reasonable for us to keep more than on labels. A question-answer pair can cover more than one motif and therefore can fall into more than one categories. 
* For post complexity, we also have different annotations on some pairs, which we believe makes sense. Team members are from various background with difference in coding experience. We decided to keep the higher label if we encounter disagreed ones (e.g., we will choose "intermediate" rather than "beginner" if we have both). 
* For directness, all pairs we annotated are in agreement as expected. The default is "direct" since typically if there has no special words like other user names or "@", it is a direct answer. People tend to answer question directly without saying this is a direct answer. "Reference" is very obvious since those pairs will just refer to other resource or link. "Adding on", with part of direct answer based on others' answers, is kind of in between. But they are not hard to tell from features.

## Challenges
Quality: when annotating, there are "bad" questions which:
1. have so few words and make the question-answer pairs not very specific and hard to classify 
2. contain mostly code (we do not include code into our data) and hard to classify

Quantity: when annotating, there are a bunch of questions which are "problematic" for our annotation <br>
(the scraper misclassified a \<p\> tag as the question when in fact it is a paragraph inserted by the website). <br>
For example: 
1. "the community reviewed whether to reopen this question last month and left it closed" or 
2. "Want to improve this question? Update the question so it focuses on one problem only by editing this post." 
<br> Therefore, we lost some data points due to these challenges. 

How we handle it?
1. we scrape more than necessary 1300+ question-answer pairs to compensate for lost data points
2. we annotate more than required (550 each team member, 2200 in total, twice the corpus)
3. we have 100% double-touched annotation (the annotation might not agree but at least we did a comparison on 100% of the data).

Also refer to [Annotation options](https://github.ubc.ca/mds-cl-2021-22/COLX_523_Group1/blob/master/milestone3/Annotation_Options.md) for further discussion about quantity and quality.
