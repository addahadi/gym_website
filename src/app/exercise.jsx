import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Chip, Container, Typography } from "@mui/material";
import { fetchData, options } from "../utils/api";

const Tag = ({ label, color }) => (
  <Chip
    label={label}
    sx={{
      backgroundColor: color,
      color: "#fff",
      fontWeight: 500,
      marginRight: 1,
    }}
  />
);

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [similarByTarget, setSimilarByTarget] = useState([]);
  const [similarByEquipment, setSimilarByEquipment] = useState([]);

  useEffect(() => {
    async function fetchExerciseData() {
      const allExercises = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      const selected = allExercises.find((ex) => ex.id === id);
      setExercise(selected);

      const target = allExercises.filter(
        (ex) => ex.target === selected.target && ex.id !== selected.id
      );
      const equipment = allExercises.filter(
        (ex) => ex.equipment === selected.equipment && ex.id !== selected.id
      );
      setSimilarByTarget(target);
      setSimilarByEquipment(equipment);
    }
    fetchExerciseData();
  }, [id]);

  if (!exercise) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 12,
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        />
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {exercise.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {exercise.description}
          </Typography>
          <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
            <Tag label={`Body Part: ${exercise.bodyPart}`} color="#1976d2" />
            <Tag label={`Target: ${exercise.target}`} color="#43a047" />
            <Tag label={`Equipment: ${exercise.equipment}`} color="#fb8c00" />
            <Tag label={`Difficulty: ${exercise.difficulty}`} color="#e53935" />
            <Tag label={`Category: ${exercise.category}`} color="#1e88e5" />
          </Box>
        </Box>
      </Box>

      {/* Secondary Muscles */}
      {exercise.secondaryMuscles?.length > 0 && (
        <Box mt={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Secondary Muscles
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap">
            {exercise.secondaryMuscles.map((muscle, index) => (
              <Chip key={index} label={muscle} color="default" />
            ))}
          </Box>
        </Box>
      )}

      {/* Instructions */}
      <Box mt={6}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          How to Perform
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          {exercise.instructions.map((step, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "#f9f9f9",
                borderLeft: "4px solid #fb8c00",
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography fontWeight="bold" color="orange">
                Step {i + 1}
              </Typography>
              <Typography>{step}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Similar Exercises by Target */}
      <Box mt={8}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Similar Exercises – Targeting{" "}
          <span style={{ color: "#fb8c00" }}>{exercise.target}</span>
        </Typography>
        <Box sx={{ display: "flex", overflowX: "auto", gap: 2, py: 2 }}>
          {similarByTarget.map((ex) => (
            <Box
              key={ex.id}
              sx={{
                minWidth: 200,
                border: "1px solid #ccc",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 1,
              }}
            >
              <img
                src={ex.gifUrl}
                alt={ex.name}
                style={{ width: "100%", height: 150, objectFit: "cover" }}
              />
              <Box p={1}>
                <Typography fontWeight="bold" fontSize="14px">
                  {ex.name}
                </Typography>
                <Typography fontSize="12px" color="text.secondary">
                  Target: {ex.target}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Similar Exercises by Equipment */}
      <Box mt={6}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Similar Exercises – Using{" "}
          <span style={{ color: "#1976d2" }}>{exercise.equipment}</span>
        </Typography>
        <Box sx={{ display: "flex", overflowX: "auto", gap: 2, py: 2 }}>
          {similarByEquipment.map((ex) => (
            <Box
              key={ex.id}
              sx={{
                minWidth: 200,
                border: "1px solid #ccc",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 1,
              }}
            >
              <img
                src={ex.gifUrl}
                alt={ex.name}
                style={{ width: "100%", height: 150, objectFit: "cover" }}
              />
              <Box p={1}>
                <Typography fontWeight="bold" fontSize="14px">
                  {ex.name}
                </Typography>
                <Typography fontSize="12px" color="text.secondary">
                  Equipment: {ex.equipment}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ExerciseDetail;
