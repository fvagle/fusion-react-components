import { Meta, Story } from '@storybook/react';
import { Provider, PersonAvatar, AvatarSize, PersonAccountType } from '@equinor/fusion-react-person/src';
import type { PersonAvatarProps } from '@equinor/fusion-react-person/src';
import { createResolve } from './resolve-mock/PersonResolve';

export default {
  title: 'Examples/Person/Person Avatar',
  component: PersonAvatar,
  argTypes: {
    azureId: {
      description: 'Unique person Azure ID',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    upn: {
      description: 'Unique person email address',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    dataSource: {
      description: 'Custom data for avatar',
    },
    size: {
      description: 'Size of avatar',
      control: 'radio',
      options: AvatarSize,
      table: {
        type: { summary: 'AvatarSize' },
        defaultValue: { summary: 'medium' },
      },
    },
    clickable: {
      description: 'Is avatar clickable?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showFloatingOn: {
      description: 'Employment type of the person',
      control: 'radio',
      options: ['click', 'hover'],
      table: {
        type: { summary: '"click","hover"' },
      },
    },
    disabled: {
      description: 'Is avatar disabled?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    accountType: {
      description: 'Employment type of the person',
      control: 'select',
      options: PersonAccountType,
      table: {
        type: { summary: 'PersonAccountType' },
      },
    },
  },
} as Meta;

export type AvatarProps = PersonAvatarProps & {
  accountType: PersonAccountType;
};

export const Component: Story<AvatarProps> = (props: AvatarProps) => (
  <Provider resolve={createResolve}>
    <PersonAvatar {...props} />
  </Provider>
);
Component.args = {
  azureId: '1234',
  size: AvatarSize.Medium,
  clickable: false,
  disabled: false,
  accountType: PersonAccountType.Employee,
};

export const DataSource: Story<AvatarProps> = (props: AvatarProps) => (
  <Provider resolve={createResolve}>
    <PersonAvatar
      {...props}
      azureId="9876-5432-1098"
      dataSource={{
        name: 'Rick Sanchez (C-137)',
      }}
    />
  </Provider>
);

export const Size: Story<{ sizes: Array<AvatarProps['size']> }> = (props: { sizes: Array<AvatarProps['size']> }) => (
  <Provider resolve={createResolve}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      {props.sizes.map((size) => (
        <PersonAvatar key={size} size={size} azureId="1234" />
      ))}
    </div>
  </Provider>
);
Size.args = { sizes: [AvatarSize.Large, AvatarSize.Medium, AvatarSize.Small, AvatarSize.XSmall] };

export const Clickable: Story<AvatarProps> = (props: AvatarProps) => (
  <Provider resolve={createResolve}>
    <PersonAvatar {...props} />
  </Provider>
);
Clickable.args = {
  azureId: '1234',
  clickable: true,
};

export const CardOnHover: Story<AvatarProps> = (props: AvatarProps) => (
  <Provider resolve={createResolve}>
    <PersonAvatar {...props} />
  </Provider>
);
CardOnHover.args = {
  azureId: '1234',
  clickable: true,
  showFloatingOn: 'hover',
};

export const CardOnClick: Story<AvatarProps> = (props: AvatarProps) => (
  <Provider resolve={createResolve}>
    <PersonAvatar {...props} />
  </Provider>
);
CardOnClick.args = {
  azureId: '1234',
  clickable: true,
  showFloatingOn: 'click',
};

export const Disabled: Story<AvatarProps> = (props: AvatarProps) => (
  <Provider resolve={createResolve}>
    <div>
      <PersonAvatar {...props} />
    </div>
  </Provider>
);
Disabled.args = {
  azureId: '1234',
  disabled: true,
};
