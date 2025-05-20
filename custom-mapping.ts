import { mapping } from '@eva-design/eva';

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
                backgroundColor: 'color-success-700',
              },              
            },
          },
        },
      },
    },
  },
};
