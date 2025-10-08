import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import { Table } from '../Table/Table';
import { TableCell } from '../TableCell/TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
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
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Table>
      <tbody>
        <TableRow {...args}>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Table>
      <tbody>
        <TableRow {...args}>
          <TableCell>Disabled</TableCell>
          <TableCell>Row</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#e3f2fd',
    color: '#1565c0',
  },
  render: (args) => (
    <Table>
      <tbody>
        <TableRow {...args}>
          <TableCell>Custom</TableCell>
          <TableCell>Colored</TableCell>
          <TableCell>Row</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};