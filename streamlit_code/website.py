import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.title("Search Bar")

# Create a text input field for the user to enter their search query
query = st.text_input("Enter your search query:", "")

# Create a button for the user to click to initiate the search
search_btn = st.button("Search")
# pd.options.display.max_rows= 9999
# Read the contents of the CSV file
df = pd.read_csv('../Dataset/Final_Dataset.csv')
print(df.Restaurant)
# Define a function to retrieve the search results and display them in a list
# def search_results(query):
#     # Use the query to filter the rows of the dataframe
#     filtered_df = df[df['Restaurant'].str.contains(query, case=False)]
#     # Return the filtered rows as a list
#     return filtered_df['Restaurant'].tolist()

# # Call the search_results function when the user clicks the search button
# x=search_results(query)

val=df.loc[df['Restaurant'] == query]

# Display the search results in a list
if(query != ""):
   st.write(val)
else:
   st.write(df.Restaurant)

# st.write(x)


