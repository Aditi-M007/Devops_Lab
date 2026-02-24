# 🚀 DevSecOps Lab – CI with GitHub Actions

## 📘 Subject: Introduction to DevSecOps

**Lab Topic:** Continuous Integration (CI) using GitHub Actions

---

# ✅ Checkpoint 1 – Hello CI

### Q1: What is the "Trigger" in this workflow?

```yaml
on: [push]
```

The trigger is the **push event**.
This means the workflow starts automatically whenever code is pushed to the repository.

---

### Q2: Where is the computer located that runs the echo command?

The command runs on a virtual machine provided by GitHub.

```yaml
runs-on: ubuntu-latest
```

GitHub creates a temporary Ubuntu Linux virtual machine in the cloud to execute the workflow.

So the code runs on **GitHub’s cloud servers**, not on the local system.

---

### Q3: If you create `test.txt` and push it, will the Action run again?

Yes, it will run again.

Because the workflow is triggered on **every push**, regardless of which file is modified.

---

# ✅ Checkpoint 2 – Python CI

### Q1: When the test failed, what color icon appeared?

A **red ❌ cross icon** appeared.

Red indicates that the CI pipeline failed.

---

### Q2: Why do we need `actions/checkout@v4`?

```yaml
- uses: actions/checkout@v4
```

This step downloads the repository code into the GitHub runner.

Without this step:

* The runner will not have access to the project files
* The test files will not exist
* The workflow will fail

---

### Q3: Why is it better for CI to find the error than a customer?

* CI catches bugs immediately
* Developers fix issues before deployment
* Customers never see broken features
* Saves time and protects reputation

CI acts as an automated quality checker.

---

# ✅ Checkpoint 3 – Weather App (Secrets + Matrix)

### Q1: Why use a Secret instead of hardcoding the API key?

* API keys are sensitive information
* Hardcoding exposes credentials publicly
* GitHub Secrets are encrypted and hidden
* Improves security

Using Secrets prevents data leaks.

---

### Q2: What is the benefit of testing on multiple Node.js versions?

```yaml
node-version: [18.x, 20.x]
```

Benefits:

* Ensures compatibility
* Detects version-specific bugs
* Makes the app stable
* Supports more users

This is called **Matrix Testing**.

---

### Q3: What is a Build Artifact?

A Build Artifact is the final packaged version of the application.

Example:

```
weather-app-dist.zip
```

The deployment team can:

* Download it
* Deploy directly to production
* Avoid rebuilding the code

---

# ✅ Checkpoint 4 – Python Testing with Pytest

### What happens if a test fails intentionally?

* CI shows ❌ failure
* Logs display which test failed
* Pipeline stops

---

### What happens when adding a new function and test?

* CI automatically runs the new tests
* If correct → Green ✅
* If wrong → Red ❌

---

### After fixing the test?

* CI runs again
* Shows Green ✅
* Confirms issue is resolved

---

# ✅ Checkpoint 5 – Multi-Language CI

### Q1: Do jobs run in parallel or sequentially?

They run in **parallel** by default.

Both Python and JavaScript jobs start at the same time.

---

### Q2: What happens if Python passes but JavaScript fails?

The overall workflow status becomes ❌ Failed.

Even if one job fails, the entire workflow is marked as failed.

---

### Q3: How to make JavaScript depend on Python passing?

Add this inside the JavaScript job:

```yaml
needs: python-tests
```

This makes the job run sequentially after Python tests pass.

---

# ✅ Checkpoint 6 – Matrix Testing

### Q1: How many total jobs run?

Python Matrix:

* 3 OS versions
* 4 Python versions

```
3 × 4 = 12 jobs
```

Node Matrix:

* 3 Node versions

```
3 jobs
```

### Total Jobs:

```
12 + 3 = 15 jobs
```

---

### Q2: Which combinations might fail?

Possible failures:

* Python 3.12 compatibility issue
* Windows path issue
* Node 21 breaking changes

Matrix testing helps detect platform-specific bugs.
