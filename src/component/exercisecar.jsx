import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Button, Box, Paper } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: "none" }}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: 280,
          height: 420, // fixed height for all cards
          borderRadius: 4,
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box
          component="img"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          sx={{
            width: "100%",
            height: 160,
            objectFit: "cover",
            borderRadius: 2,
            mb: 1.5,
          }}
        />

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
          <Button
            size="small"
            sx={{
              backgroundColor: "#ff930f",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "capitalize",
              fontSize: "12px",
              px: 2,
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            size="small"
            sx={{
              backgroundColor: "#ffa41b",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "capitalize",
              fontSize: "12px",
              px: 2,
            }}
          >
            {exercise.target}
          </Button>
        </Stack>

        <Typography
          variant="h6"
          fontWeight="bold"
          textTransform="capitalize"
          color="text.primary"
          mb={0.5}
          noWrap
        >
          {exercise.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3, // max 3 lines
            WebkitBoxOrient: "vertical",
            minHeight: "60px",
          }}
        >
          {exercise.description}
        </Typography>
      </Paper>
    </Link>
  );
};

export default ExerciseCard;
