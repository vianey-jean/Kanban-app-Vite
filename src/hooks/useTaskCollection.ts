import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Faire: [
      {
        id: uuidv4(),
        column: ColumnType.A_FAIRE,
        title: 'Tâche 1',
        color: 'blue.300',
      },
    ],
    'En Progress': [
      {
        id: uuidv4(),
        column: ColumnType.EN_PROGRESS,
        title: 'Tâche 2',
        color: 'yellow.300',
      },
    ],
    Bloquer: [
      {
        id: uuidv4(),
        column: ColumnType.BLOQUER,
        title: 'Tâche 3',
        color: 'red.300',
      },
    ],
    TESTER: [
      {
        id: uuidv4(),
        column: ColumnType.TESTER,
        title: 'Tâche 4',
        color: 'orange.300',
      },
    ],
    COMPLET: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLET,
        title: 'Tâche 5',
        color: 'green.300',
      },
    ],
  });
}

export default useTaskCollection;
