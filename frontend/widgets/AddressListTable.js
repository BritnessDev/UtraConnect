import className from "classnames";
import FeatherIcon from "feather-icons-react";
import React, { useMemo, useState } from "react";
import { ModalContacts } from '../modals';

import {
    Alert,
    Button,
    Card,
    CloseButton,
    Col,
    Dropdown,
    Form,
    InputGroup,
    ListGroup,
    Pagination,
    Row,
    Table,
} from "react-bootstrap";
import {
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useSortBy,
    useTable,
} from "react-table";
import { IndeterminateCheckbox, Select } from "../components/vendor";

export default function AddressListTable({
    deals,
    leadScoreOptions,
    pagesOptions,
    titleOptions,
    ...props
}) {
    const data = useMemo(() => deals, []);

    const columns = useMemo(
        () => [
            {
                id: "selection",
                Header: ({ getToggleAllRowsSelectedProps }) => (
                    <div>
                        <IndeterminateCheckbox
                            {...getToggleAllRowsSelectedProps()}
                        />
                    </div>
                ),
                Cell: ({ row }) => (
                    <div>
                        <IndeterminateCheckbox
                            {...row.getToggleRowSelectedProps()}
                        />
                    </div>
                ),
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Type of contact",
                accessor: "contact",
            },
            {
                Header: "Zip Code",
                accessor: "zip",
            },
            {
                Header: "City",
                accessor: "city",
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Person",
                accessor: "person",
            },
            {
                Header: "Created on",
                accessor: "created",
            },
            {
                Header: "Modified on",
                accessor: "modified",
            },
            {
                id: "actions",
                disableSortBy: true,
                Cell: () => (
                    <Dropdown align="end">
                        <Dropdown.Toggle
                            as="span"
                            className="dropdown-ellipses"
                            role="button"
                        >
                            <FeatherIcon icon="more-vertical" size="17" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#!">Edit</Dropdown.Item>
                            <Dropdown.Item href="#!">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ),
            },
        ],
        []
    );

    const {
        canNextPage,
        canPreviousPage,
        getTableBodyProps,
        gotoPage,
        headerGroups,
        nextPage,
        page,
        pageOptions,
        prepareRow,
        previousPage,
        setGlobalFilter,
        state: { pageIndex, selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect
    );
    const [modalMembersVisible, setModalMembersVisible] = useState(false);

    return (
        <div>
            <Card>
                <Card.Header>
                    <Row className="align-items-center">
                        <Col>
                            <InputGroup className="input-group-merge input-group-flush input-group-reverse">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    onChange={(e) =>
                                        setGlobalFilter(
                                            e.target.value
                                                ? e.target.value
                                                : undefined
                                        )
                                    }
                                />
                                <InputGroup.Text>
                                    <FeatherIcon icon="search" size="1em" />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <Col xs="auto" className="me-n3">
                            <Select
                                options={[
                                    {
                                        value: 1,
                                        label: "type 1",
                                    },
                                    {
                                        value: 2,
                                        label: "type 2",
                                    },
                                ]}
                                placeholder="Type of contact"
                                layout="flush"
                                size="sm"
                                className="btn btn-white btn-sm"
                            />
                        </Col>
                        <Col xs="auto" className="me-n3">
                            <Select
                                options={pagesOptions}
                                layout="flush"
                                size="sm"
                                className="btn btn-white btn-sm"
                                placeholder="Select the page size"
                            />
                        </Col>
                        <Col xs="auto">
                            <Dropdown align="right" className="dropdown-card">
                                <Button bsPrefix="btn btn-white btn-sm" onClick={() => {setModalMembersVisible(true)}}>
                                    <FeatherIcon
                                        className="me-1"
                                        icon="plus"
                                        size="1em"
                                    />{" "}
                                    New
                                </Button>
                                <Dropdown.Menu>
                                    <Card.Header>
                                        <h4 className="card-header-title">
                                            Filters
                                        </h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <ListGroup className="list-group-flush mt-n4 mb-4">
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>
                                                        <small>Title</small>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Select
                                                            options={
                                                                titleOptions
                                                            }
                                                            size="sm"
                                                        />
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>
                                                        <small>
                                                            Lead score
                                                        </small>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Select
                                                            options={
                                                                leadScoreOptions
                                                            }
                                                            size="sm"
                                                        />
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <Button className="w-100">
                                            Apply filter
                                        </Button>
                                    </Card.Body>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Card.Header>
                <Table
                    size="sm"
                    className="card-table table-nowrap"
                    hover
                    responsive
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr
                                {...headerGroup.getHeaderGroupProps({
                                    role: null,
                                })}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps({
                                                className: className(
                                                    column.className,
                                                    column.canSort &&
                                                        "is-sortable"
                                                ),
                                                role: null,
                                            })
                                        )}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        className="fs-base"
                        {...getTableBodyProps({ role: null })}
                    >
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps({ role: null })}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps({
                                                    className:
                                                        cell.column.className,
                                                    role: null,
                                                })}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <Card.Footer className="d-flex justify-content-between">
                    <Pagination className="card-pagination pagination-tabs">
                        <Pagination.Item
                            className="ps-0 pe-4 border-end"
                            disabled={!canPreviousPage}
                            onClick={() => previousPage()}
                        >
                            <FeatherIcon
                                icon="arrow-left"
                                size="1em"
                                className="me-1"
                            />{" "}
                            Prev
                        </Pagination.Item>
                    </Pagination>
                    <Pagination className="card-pagination pagination-tabs">
                        {pageOptions.map((option, index) => (
                            <Pagination.Item
                                key={index}
                                active={option === pageIndex}
                                onClick={() => gotoPage(option)}
                            >
                                {option + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                    <Pagination className="card-pagination pagination-tabs">
                        <Pagination.Item
                            className="ps-4 pe-0 border-start"
                            disabled={!canNextPage}
                            onClick={() => nextPage()}
                        >
                            Next{" "}
                            <FeatherIcon
                                icon="arrow-right"
                                size="1em"
                                className="ms-1"
                            />
                        </Pagination.Item>
                    </Pagination>
                </Card.Footer>
            </Card>
            {Object.keys(selectedRowIds).length > 0 && (
                <Alert
                    variant="dark"
                    className="list-alert alert-dismissible border"
                >
                    <Row className="align-items-center">
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label={`${
                                    Object.keys(selectedRowIds).length
                                } deal(s)`}
                                checked
                                disabled
                            />
                        </Col>
                        <Col xs="auto" className="me-n3">
                            <Button variant="white-20" size="sm">
                                Edit
                            </Button>
                            <Button
                                variant="white-20"
                                size="sm"
                                className="ms-1"
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                    <CloseButton />
                </Alert>
            )}
            <div id="modals" {...props}>
            <ModalContacts visible={modalMembersVisible} onDismiss={() => setModalMembersVisible(false)} />
      
    </div>
        </div>
    );
}
