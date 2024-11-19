import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei'; // Assurez-vous que Text est bien importé

import { Activity as ActivityIcon, GitPullRequest, CircleDot } from 'lucide-react';
import { useActivityStore } from 'store/activityStore';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  return (
    <Canvas>
      {' '}
      {/* Utilisez juste une couleur de fond ou une lumière pour tester */}
      <ambientLight />
    </Canvas>
  );
};
// const activities = data.series[0]?.fields[0]?.values || [];
// const activities: Activity[] = [
//   { id: 1, lat: 37.7749, lng: -122.4194, type: 'commit', timestamp: Date.now().toString() },
//   { id: 2, lat: 51.5074, lng: -0.1278, type: 'pull_request', timestamp: Date.now().toString() },
//   { id: 3, lat: -33.8688, lng: 151.2093, type: 'issue', timestamp: Date.now().toString() },
// ];

// export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
//   if (data.series.length === 0) {
//     return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
//   }

//   return (
//     <div>
//       {data.series.map((dataFrame, index) => (
//         <div key={index}>{dataFrame.fields[0].values}</div>
//       ))}
//     </div>
//   );
// };

// const theme = useTheme2();
// const styles = useStyles2(getStyles);

// const getStyles = () => {
//   return {
//     wrapper: css`
//       font-family: Open Sans;
//       position: relative;
//     `,
//     svg: css`
//       position: absolute;
//       top: 0;
//       left: 0;
//     `,
//     textBox: css`
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       padding: 10px;
//     `,
//   };
// };

/*  <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>
          <circle data-testid="simple-panel-circle" style={{ fill: theme.colors.primary.main }} r={100} />
        </g>
      </svg>

      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div data-testid="simple-panel-series-counter">Number of series: {data.series.length}</div>
        )}
        <div>Text option value: {options.text}</div>
      </div>
    </div> */

//    const { activities, addActivity, getFilteredActivities, counter } = useActivityStore();

// useEffect(() => {
//   const interval = setInterval(() => {
//     const newActivity = {
//       id: Date.now(),
//       lat: Math.random() * 180 - 90,
//       lng: Math.random() * 360 - 180,
//       type: ['commit', 'pull_request', 'issue'][Math.floor(Math.random() * 3)] as any,
//       timestamp: new Date().toISOString(),
//     };

//     addActivity(newActivity);
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);

//const filteredActivities = getFilteredActivities();
//console.log(filteredActivities);
