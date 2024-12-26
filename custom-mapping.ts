import { mapping } from '@eva-design/eva';
import { Layout } from 'react-native-reanimated';

export const customMapping = {
  ...mapping,
  components: {
    ...mapping.components,
    Button: {
      appearances: {
        filled: {
          mapping: {
            textColor: 'color-primary-100',
            state: {
              active: {
                backgroundColor: 'color-primary-700',
              },
            },
          },
        },
      },
    },
  },
};
