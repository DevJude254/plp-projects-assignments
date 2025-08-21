# File Read & Write Challenge 
try:
    with open("input.txt", "r") as infile:
        content = infile.read()

    
    modified_content = content.upper()

    with open("output.txt", "w") as outfile:
        outfile.write(modified_content)

    print("Modified file has been written to output.txt ✅")

except FileNotFoundError:
    print("Error: input.txt not found.")
