import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';
import { TableFooter } from '../TableFooter/TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
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
    borderColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
    striped: {
      control: 'boolean',
    },
    hoverable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// DEFAULT STATE
export const Default: Story = {
  args: {
    disabled: false,
    striped: false,
    hoverable: false,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Age</TableCell>
          <TableCell isHeader>City</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>28</TableCell>
          <TableCell>New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>34</TableCell>
          <TableCell>Los Angeles</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>42</TableCell>
          <TableCell>Chicago</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Product</TableCell>
          <TableCell isHeader>Price</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Widget</TableCell>
          <TableCell>$19.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gadget</TableCell>
          <TableCell>$29.99</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

// STRIPED ROWS
export const Striped: Story = {
  args: {
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Status</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Task 1</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Task 2</TableCell>
          <TableCell>In Progress</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Task 3</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Task 4</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

// HOVERABLE ROWS
export const Hoverable: Story = {
  args: {
    hoverable: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Item</TableCell>
          <TableCell isHeader>Quantity</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Apples</TableCell>
          <TableCell>10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Oranges</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bananas</TableCell>
          <TableCell>8</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

// WITH FOOTER
export const WithFooter: Story = {
  args: {
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Item</TableCell>
          <TableCell isHeader>Price</TableCell>
          <TableCell isHeader>Quantity</TableCell>
          <TableCell isHeader>Total</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Widget</TableCell>
          <TableCell>$10.00</TableCell>
          <TableCell>2</TableCell>
          <TableCell>$20.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gadget</TableCell>
          <TableCell>$15.00</TableCell>
          <TableCell>1</TableCell>
          <TableCell>$15.00</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total:</TableCell>
          <TableCell>$35.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};