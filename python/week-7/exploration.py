#Visualisation

import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

city_df = pd.read_csv("dataset/city.csv")
country_df = pd.read_csv("dataset/country.csv")
language_df = pd.read_csv("dataset/countrylanguage.csv")


# 1. Line chart: Example - top 10 most populated cities
top_cities = city_df.nlargest(10, "Population")
plt.figure(figsize=(10,5))
plt.plot(top_cities["Name"], top_cities["Population"], marker="o")
plt.title("Top 10 Most Populated Cities")
plt.xticks(rotation=45)
plt.ylabel("Population")
plt.show()

# 2. Bar chart: Average city population per country (top 10)
avg_population = city_df.groupby("CountryCode")["Population"].mean().nlargest(10)
avg_population.plot(kind="bar", figsize=(10,5))
plt.title("Average City Population per Country (Top 10)")
plt.ylabel("Population")
plt.show()

# 3. Histogram: Distribution of city populations
plt.hist(city_df["Population"], bins=50, color="skyblue", edgecolor="black")
plt.title("Distribution of City Populations")
plt.xlabel("Population")
plt.ylabel("Number of Cities")
plt.show()

# 4. Scatter plot: Population vs ID (not very meaningful, but just an example)
plt.scatter(city_df["ID"], city_df["Population"], alpha=0.5)
plt.title("City ID vs Population")
plt.xlabel("City ID")
plt.ylabel("Population")
plt.show()
