import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
    },
    color: { 
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Table>
      <TableHeader {...args}>
        <TableRow>
          <TableCell isHeader>Column 1</TableCell>
          <TableCell isHeader>Column 2</TableCell>
          <TableCell isHeader>Column 3</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Table>
      <TableHeader {...args}>
        <TableRow>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Email</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  ),
};