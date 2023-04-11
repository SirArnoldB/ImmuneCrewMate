import React, { useEffect, useState } from "react";
import { fetchEffectorFunctionsData } from "../utils/fetchVisualizationData";
import randomColor from "randomcolor";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";

const EffectorFunctionsChart = () => {
  const [effectorFunctionsData, setEffectorFunctionsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEffectorFunctionsData();
      setEffectorFunctionsData(data);
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
        Effector Functions Distribution
      </Typography>
    );
  };

  return (
    <>
      {effectorFunctionsData ? (
        <>
          <ChartTitle />
          <PieChart
            width={730}
            height={300}
            title="Effector Functions Distribution"
          >
            <Pie
              data={effectorFunctionsData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill={`${randomColor({ luminosity: "dark" })}`}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {effectorFunctionsData.map((entry, index) => (
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

export default EffectorFunctionsChart;
