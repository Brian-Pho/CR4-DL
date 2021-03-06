---
layout: post
title: "ENSF 519: Applied Data Science"
date: "2019-09-01"
categories:
  - Courses
excerpt: "Applied Data Science"
---

## L1 - L7: Python, Pandas, Numpy Introduction

- No notes because it was review or uninteresting

## L8: Introduction to ML

- k-Nearest Neighbors
    - Classifies point based on "k" nearest neighbors
    - k is always an odd number to prevent ties
    - Higher k = Largest distance for search
    - Pros
        - Easy to understand
        - Reasonable performance given simplicity
    - Cons
        - Poor performance on sparse datasets
        - Can be slow on large datasets
- Generalization
    - Underfit: predictions are not specific enough
    - Overfit: predictions are too closely modeled on the data
- Classification vs Regression
    - Classification: discrete (type/class/label)
    - Regression: continuous (target/response/value)
- k-Neighbors Regression
    - Average the k nearest neighbors to the input to predict its target
- Evaluating regression
    - R^2 (Coefficient of determination)
        - R^2 = Explained variance / Total variance
        - Between 0 and 1
        - 1 = Perfect prediction
        - 0 = Only predicts the mean of the data
- Linear Regression Models
    - Linear regression: fits line to data
        - Minimizes the mean square error
        - Pros
            - Simple
        - Cons
            - Prone to underfitting
            - No way to control model complexity because no parameters

## L9: Regression

- Ridge regression: linear regression but with weight penalty
- Regularization
    - Regularization: explicitly restricting a model to prevent overfitting
    - Alpha parameter: controls the tradeoff between simplicity and performance of a model
    - Tries to make the weight matrix close to zero
    - Each feature should have as little effect on the out while still predicting well
    - Regularization becomes less important as we have more data
    - L1 Regularization (Lasso): penalizes the absolute size of the weight
    - L2 Regularization (Ridge): penalizes the squared size of the weight
- Linear Classifiers
    - Classification vs regression = decision boundary vs prediction values
    - Logistic regression: predicts the probability of the input in a class (between 0 and 1)

## L10: SVM and Clustering

- Linear Support Vector Machines (lSVC): decision boundary is the support vector
- One-vs-rest: binary relevance, build a binary classifier for each class
- Clustering
    - Clustering: grouping data into partitions
    - Points in a cluster should be similar, points in a different cluster should be different
- k-Means Clustering
    - Finds cluster centers that represent the data
    - Steps
    1. Assign each point to the closest cluster center
    2. Update the cluster centers to the mean of the points assigned to it
    - Pros
        - Fast
        - Easy to understand and implement
    - Cons
        - Susceptible to falling into local minimums
        - We don't know how many cluster centers to give it
        - Assumes all clusters have the same diameter
        - Assumes all clusters are omni-directional
- Agglomerative Clustering
    - Assigns each point as its own cluster and merges clusters until the number of desired clusters is reached
    - Merging function
        - Ward: minimize variance between clusters
        - Average: smallest average distance between cluster's points
        - Complete: smallest maximum distance between cluster's points

## L11: Clustering

- Density-Based Spatial Clustering of Applications with Noise (DBSCAN): identifies points in crowded/dense regions of the feature space
    - Core sample: points in a dense region
    - If there are at least min_samples many data points within a distance of eps to a given data point, then that data point is classified as a core sample
    - Algorithm
    1. Pick random sample
    2. Check if there are min number of samples within distance of eps
    3. If no, then label sample as noise
    4. If yes, then label sample as core sample and assigned a new cluster label
    5. All samples within the distance of the core sample are also given the cluster label
    6. If the samples are core samples, all neighbors are visited recursively
    - Three kinds of points
    1. Noise
    2. Core samples
    3. Boundary points: samples within eps distance of core samples
    - Increasing eps means more points in a cluster but fewer cluster
    - Increasing min samples means more noise points but fewer core points
    - Eps implicitly controls the number of clusters
    - Min samples controls the minimum cluster size
- Evaluating Clustering Algorithms
    - Without ground truth
        - Can't use accuracy
        - Silhouette score: computes how similar a point is to its own cluster compared to other clusters
    - With ground truth
        - Adjusted rand index (ARI): computes measure of agreement/disagreement between and within clusters

## L12: Preprocessing & Dimensionality Reduction

- Scaling
    - Standard: mean = 0 and variance = 1
    - Robust: median = 0 and quartile = 1
    - MinMax: values between 0 and 1
- Normalizer: projects data onto a circle
- Fit the scaler on the training data, apply it to both the training and testing data
- Never fit the scaler on the testing data because it will perform an improper scaling and leaks data from the test set into the training set
- Dimensionality Reduction
    - Reduce the data dimension by compressing it
    - Principle Component Analysis (PCA): decomposes dataset into dimensions that explain the maximum amount of variance
        - Eigenvector with the largest eigenvalue is the principle component

## L13: Textual Data

- One-hot encoding: associating a unique integer index to each unique word
- Corpus = Dataset
- Information Retrieval (IR)
- Natural Language Processing (NLP)
- Text Data as a Bag of Words
    - Discard document structure (paragraphs, chapters, sentences)
    - Only count how often each word appears in each text in the corpus
- Tokenization: splitting a document into words/tokens
- Vocabulary building: collect vocabulary of all words
- Encoding: counting how often a word appears

## L14: TFIDF

- Count vectorizer = tokenization
- Improve tokenization
    - Add lower bound on how many times a word appears
- Normalization
    - Spelling
    - Stemming
    - Lemmatization
    - Lower/Upper case
    - Stop words: discarding words that appear to frequently to be informative (E.g. "a", "the", "i")
- Term frequency–inverse document frequency (TF–IDF): give high weight to any term that appears often in a particular document, but not in many documents
    - TF-IDF = TF * IDF
    - Term frequency (TF): the number of times a word appears in a document
    - Inverse document frequency (IDF): total documents / number of documents that the term appears in
    - TF-IDF gives more weight to words the distinguish documents
    - Low TF-IDF = words appears in many documents
    - High TF-IDF = word appears in select documents often
- n-Grams: overlapping sequence of words that preserves some order
- Latent Dirichlet Allocation (LDA): finds groups of words/topics
that appear frequently together
    - Clustering algorithm
    - Each document is a “mixture” of a subset of the topics

## L15: Naive Bayes

- Two types of classifiers
    - Discriminative: learn `p(y|X)`, learn output given input
    - Generative: learn `p(y)`, learn `p(X|y)`, create input given class
    - Discriminative learns the decision boundary
    - Generative: learns the distribution of the input data
- Naive Bayes
    - Generative classifier
    - Uses class probability and data point given class probability to predict class given data point
    - Bayes theorem used to flip conditional probability
    - Different naive bayes classifiers depending on assumed data point given class probability distribution
    - Pros
        - When assumptions match data
        - Good for well-separated data, high dimensional data
        - Fast and easily interpretable
    - Cons
        - Poor when a lot of features equals zero
        - Correlation between attributes can not be captured

## L16: Decision Trees

- Decision tree (DT): a tree where each node is a decision
- Performs both classification and regression
- Questions are used to make a decision at each node
- Minimize impurity
    - Impurity: Gini-index and cross-entropy
- DTs learn the decision boundary by recursively partitioning the space in a manner that maximizes the information gain
- Reducing overfitting
    - Limit maximum depth
    - Limit number of leaf nodes
    - Set min number of points needed to satisfy condition before splitting
- Regression tree: DTs but for regression
    - Impurity: mean square error or mean absolute error
    - Predict mean
- Ensembles
    - Ensembles: combining different models to achieve better performance (Frankenstein models)
    - Voting classifier: uses votes from each model to classify data
        - Hard vote: uses discrete votes
        - Soft vote: uses probabilities
    - Averaging methods
        - Build several ensembles from random subsets of the original dataset and aggregate their predictions
        - Bagging: random subsets of the samples with replacement
        - Bootstrap Aggregation (Bagging): generic way to build different models
        - Random forests: a collection of decision tree trained on different subsets of samples and features
    - Boosting methods
        - Boosting: refers to a family of algorithms which converts weak learner to strong learners

## L17: Model Evaluation

- Model evaluation
    - Cross validation
        - The data is split repeatedly and multiple models are trained
        - k-fold cross-validation: split data into k partitions and train k times
    - Grid search
        - Trying all possible combinations of the parameters of interest
        - Done before cross validation
    - Evaluation metrics
        - Accuracy: (TP + TN) / Total. Fraction of correctly classified examples
        - Business metrics
        - False positives/negatives
        - Confusion matrices
        - Precision: TP / (TP + FP). Used to limit false positives
        - Recall: TP / (TP + FN). Used to limit false negatives
        - f-measure: combination of precision and recall

## L18: Feature Engineering

- Feature engineering
    - Use expert knowledge
    - Domain expertise: specific knowledge in a domain
    - Data representation
        - One-hot encoding: turn data into a vector where 1 represents its existence
        - Binning: turn continuous data into discrete data by categorizing it
        - Interactions: add the original feature to the binned data
        - Polynomials: use polynomial regression
        - Transformations: modify the data using some math function
