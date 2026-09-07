from abc import ABC, abstractmethod
from typing import List, Dict, Any

class VectorStoreStrategy(ABC):
    """Enforces a strict abstract contract for all interchangeable database backends."""
    
    @abstractmethod
    def upsert_vectors(self, vectors: List[List[float]], metadata: List[Dict[str, Any]], ids: List[str]) -> bool:
        """Inserts or updates vector embeddings inside the active storage cluster."""
        pass

    @abstractmethod
    def query_similarity(self, query_vector: List[float], top_k: int) -> List[Dict[str, Any]]:
        """Executes a high-performance mathematical search loop against vector nodes."""
        pass
