import pandas as pd

# import IFSC.csv
data = pd.read_csv('data/IFSC.csv')

# get column names
print(data.columns)

# get number of entries, 164836 entries in the original database
print(len(data))

# group by BANK and get the number of entries for each bank, print the max 5 banks
print(data.groupby('BANK').size().nlargest(5))

# group by CITY and get the number of entries for city named LUCKNOW
print(data.groupby('CITY').size()['NOIDA'])
