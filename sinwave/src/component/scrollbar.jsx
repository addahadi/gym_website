import React, { useRef, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";

const ITEM_WIDTH = 270;

const Scrollbar = ({ data, bodypart, setbodypart }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();

  const handleScroll = (amount) => {
    const newScroll = scrollPosition + amount;
    setScrollPosition(newScroll);
    if (ref.current) {
      ref.current.scrollLeft = newScroll;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Scrollable container */}
      <Box
        ref={ref}
        sx={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          gap: 3,
          py: 2,
          px: 1,
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            sx={{ flex: "0 0 auto" }}
          >
            <Stack
              onClick={() => {
                setbodypart(item);
                window.scrollTo({ top: 1800, behavior: "smooth" });
              }}
              alignItems="center"
              justifyContent="center"
              className="bodyPart-card"
              sx={{
                width: `${ITEM_WIDTH}px`,
                height: "280px",
                borderRadius: 3,
                border:
                  bodypart === item ? "3px solid #ff930f" : "1px solid #ccc",
                backgroundColor: "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  bodypart === item ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                },
                gap: 4,
                px: 2,
              }}
            >
              <img src="/work.svg" alt="icon" width={50} height={50} />
              <Typography
                fontSize="20px"
                fontWeight="bold"
                color="#3A1212"
                textTransform="capitalize"
                textAlign="center"
              >
                {item}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>

      {/* Custom arrows */}
      <img
        src="/left.svg"
        alt="scroll left"
        onClick={() => handleScroll(-ITEM_WIDTH)}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 2,
          width: "40px",
          height: "40px",
        }}
      />
      <img
        src="/right.svg"
        alt="scroll right"
        onClick={() => handleScroll(ITEM_WIDTH)}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 2,
          width: "40px",
          height: "40px",
        }}
      />
    </Box>
  );
};

export default Scrollbar;
