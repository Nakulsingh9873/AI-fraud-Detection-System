from preprocess import load_and_preprocess_data

X, y = load_and_preprocess_data()

print("\nFeatures Shape:", X.shape)
print("Target Shape:", y.shape)

print("\nFirst Five Rows:")
print(X.head())