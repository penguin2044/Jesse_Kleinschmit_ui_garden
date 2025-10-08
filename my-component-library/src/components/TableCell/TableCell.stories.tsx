import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
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
    isHeader: {
      control: 'boolean',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    colSpan: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Table Cell',
    disabled: false,
  },
  render: (args) => (
    <Table>
      <tbody>
        <TableRow>
          <TableCell {...args} />
          <TableCell>Another Cell</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Cell',
    disabled: true,
  },
  render: (args) => (
    <Table>
      <tbody>
        <TableRow>
          <TableCell {...args} />
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const HeaderCell: Story = {
  args: {
    children: 'Header Cell',
    isHeader: true,
  },
  render: (args) => (
    <Table>
      <thead>
        <TableRow>
          <TableCell {...args} />
          <TableCell isHeader>Another Header</TableCell>
        </TableRow>
      </thead>
    </Table>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Table>
      <tbody>
        <TableRow>
          <TableCell align="left">Left Aligned</TableCell>
          <TableCell align="center">Center Aligned</TableCell>
          <TableCell align="right">Right Aligned</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const ColSpan: Story = {
  render: () => (
    <Table>
      <tbody>
        <TableRow>
          <TableCell colSpan={3} align="center" backgroundColor="#e3f2fd">
            This cell spans 3 columns
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};