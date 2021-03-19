import { select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Video = list({
  fields: {
    name: text({ isRequired: true }),
    blob: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
    }),
  },
});
