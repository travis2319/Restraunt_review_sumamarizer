# Restaurant Review Summarizer
This project uses Python and Jupyter Lab to perform sentiment analysis on restaurant reviews and summarize them into a score from 1 to 5, with 1 being the worst and 5 being the best.

Note: In Summarizer.ipynb, please fill with you huggingface token in headers for the review_summarizer function to process and summarize reviews. 

# Getting Started
Clone the repository:
git clone https://github.com/travis2319/Restraunt_review_sumamarizer.git
Install the required packages:
pip install -r requirements.txt
Open the Sentiment.ipynb notebook in Jupyter Lab.
Usage
Load the restaurant reviews into the notebook.
Preprocess the reviews by removing stop words and punctuation.
Perform sentiment analysis on the reviews using a pre-trained sentiment analysis model.
Calculate the average sentiment score for each review.
Summarize the reviews into a score from 1 to 10.
Output
The output of the notebook is a list of restaurant reviews with their corresponding sentiment scores.

review_text = "The food was delicious, but the service was terrible."

# Perform sentiment analysis and summarization
sentiment, summary = analyze_review(review_text)

# Print the results
print(f"Sentiment: {sentiment}")
print(f"Summary: {summary}")
Output

Sentiment: 6
Summary: The food was great, but the service was poor.

Contribution
Contributions to this project are welcome. Please create a pull request with your changes and follow the project's contribution guidelines.
