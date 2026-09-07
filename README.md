cat << 'EOF' > README.md
# template-rag-service 🗄️

## 1. Context & Architectural Bounds
The `template-rag-service` repository acts as the high-throughput memory engine and Retrieval-Augmented Generation context generator for the platform. Complying with **12-Factor App Principles #1 and #4**, it treats vector layers purely as attached backing resources loaded via runtime configurations.

## 2. Directory Semantics & Governance
* `/app/api`: Houses the REST ingestion and runtime context aggregation payload endpoints.
* `/app/services`: Contains enterprise data chunking splitters and embedding transformation routines.
* `/app/backends`: Implements the Strategy Pattern using Python Abstract Base Classes (`base.py`) to swap underlying drivers (`qdrant.py`, `pinecone.py`, `chromadb.py`) seamlessly at runtime using configurations.
* `/tests/unit`: Assures chunking algorithms, semantic mapping filters, and text splitting parameters behave as expected.
* `/tests/component`: Uses short-lived sandbox vector images locally to run full engine data tests.

## 3. SDLC Compliance Checkpoints
* **Database Driver Extension:** Adding support for alternative search layers (e.g., Elasticsearch) requires implementing a new file under `/backends` inherited from `VectorStoreStrategy`.
EOF

