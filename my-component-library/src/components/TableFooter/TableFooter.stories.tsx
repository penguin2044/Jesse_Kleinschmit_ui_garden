import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';
import { Table } from '../Table/Table';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
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
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Item</TableCell>
          <TableCell isHeader>Price</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Product A</TableCell>
          <TableCell>$10.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product B</TableCell>
          <TableCell>$15.00</TableCell>
        </TableRow>
      </tbody>
      <TableFooter {...args}>
        <TableRow>
          <TableCell>Total:</TableCell>
          <TableCell>$25.00</TableCell>
        </TableRow>
      </TableFooter>
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
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Value 1</TableCell>
        </TableRow>
      </tbody>
      <TableFooter {...args}>
        <TableRow>
          <TableCell colSpan={2}>Disabled Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
  },
  render: (args) => (
    <Table>
      <tbody>
        <TableRow>
          <TableCell>Sales</TableCell>
          <TableCell>$1000</TableCell>
        </TableRow>
      </tbody>
      <TableFooter {...args}>
        <TableRow>
          <TableCell>Grand Total:</TableCell>
          <TableCell>$1000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};