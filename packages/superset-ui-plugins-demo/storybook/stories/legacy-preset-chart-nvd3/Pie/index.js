import { PieChartPlugin } from '../../../../../superset-ui-legacy-preset-chart-nvd3';
import Stories from './Stories';
import 'nvd3/build/nv.d3.min.css';
import '../../../../../superset-ui-legacy-preset-chart-nvd3/lib/style.css';

new PieChartPlugin().configure({ key: 'pie' }).register();

export default {
  examples: [...Stories],
};