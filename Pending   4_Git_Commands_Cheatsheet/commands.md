# Initialize repository
git init

# Add files
git add .
git commit -m "Initial commit"

# Branching
git branch new-feature
git checkout new-feature

# Merging
git checkout main
git merge new-feature

# Remote
git clone https://github.com/user/repo.git
git push origin main

# Ignore files
echo "node_modules/" > .gitignore

# History
git log