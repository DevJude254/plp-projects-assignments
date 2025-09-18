import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set(style="whitegrid")

# Step 1: Load the datasets
city_df = pd.read_csv("dataset/city.csv")
country_df = pd.read_csv("dataset/country.csv")
language_df = pd.read_csv("dataset/countrylanguage.csv")

# Step 2: Explore the data
print("City dataset:")
print(city_df.head(), "\n")

print("Country dataset:")
print(country_df.head(), "\n")

print("Language dataset:")
print(language_df.head(), "\n")

print("City info:")
print(city_df.info())
print("\nMissing values in city dataset:\n", city_df.isnull().sum())

# Step 3: Basic Analysis
print("\nCity statistics:")
print(city_df.describe())

# Example: average population per country
avg_city_pop = city_df.groupby("CountryCode")["Population"].mean().reset_index()
print("\nAverage city population per country:\n", avg_city_pop.head())
