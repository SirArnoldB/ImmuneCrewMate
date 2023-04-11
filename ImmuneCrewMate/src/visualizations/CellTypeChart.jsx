import React, { useEffect, useState } from "react";
import { fetchCellTypesData } from "../utils/fetchVisualizationData";
import randomColor from "randomcolor";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";

const CellTypeChart = () => {
  const [CellTypeData, setCellTypeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCellTypesData();
      setCellTypeData(data);
    };
    fetchData();
  }, []);

  const customToolTIp = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div style={{ backgroundColor: "#fff", padding: "5px" }}>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              textAlign: "center",
            }}
          >
            {payload[0].payload.label}
          </p>
          <label>{`${payload[0].name}: ${payload[0].value}`}</label>
        </div>
      );
    }
    return null;
  };

  const ChartTitle = () => {
    return (
      <Typography
        component="div"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1rem",
          marginTop: "1rem",
        }}
      >
        Cell Type Distribution
      </Typography>
    );
  };

  return (
    <>
      {CellTypeData ? (
        <>
          <ChartTitle />
          <PieChart width={730} height={300} title="Cell Type Distribution">
            <Pie
              data={CellTypeData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill={`${randomColor({ luminosity: "dark" })}`}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {CellTypeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={randomColor({ luminosity: "dark" })}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip content={customToolTIp} />
          </PieChart>
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default CellTypeChart;
