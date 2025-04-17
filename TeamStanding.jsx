import { useState,useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoadingSpinner from "../ui/LoadingSpinner";
export default function TeamStanding() {
  const [PointsTable,setPointsTable]=useState([]);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const fetchPointsTable=async() => {
      try {
        const data = await getPointsTable();
        set PointsTable(data);
      } catch(err) {
        setError("We are unable to load the data");
      } finally {
        setLoading(false);
      }
    };
    fetchPointsTable();
  }, []);
  if (loading) {
    return {
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>
  }
  return {
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl text-bold mb-6">Points Table</h3>
    </div>
  );
}
    
  

