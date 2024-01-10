import { schedule } from 'danger';

import { reportSemanticRelease } from './src';

schedule(reportSemanticRelease());
