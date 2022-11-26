import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAtom } from 'jotai';
import { dateAtom, weightsAtom } from './Store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Gráfico com a progressão de peso',
    },
  },
};

export function Chart() {
  const [weights] = useAtom(weightsAtom);
  const [dates] = useAtom(dateAtom);
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Peso em Kg',
        data: weights,
        borderColor: 'rgb(50, 205, 50)',
        backgroundColor: 'rgb(50, 205, 50)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
