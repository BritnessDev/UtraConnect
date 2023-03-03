import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { Badge, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Header } from '../components';
import { Highlight } from '../components/vendor';

export default function Icons({ ...props }) {
  return (
    <div id="icons" {...props}>
      <Header className="mt-md-5">
        <Header.Body>
          <Header.Title>
            Icons{' '}
            <Badge bg="primary-soft" className="ms-1 mt-n1">
              Dashkit only
            </Badge>
          </Header.Title>
          <Header.Subtitle>Simply beautiful icons powered by the Feather Icon React.</Header.Subtitle>
        </Header.Body>
      </Header>
      <Card>
        <Card.Body>
          <div className="h2">
            <OverlayTrigger overlay={<Tooltip>activity</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="activity" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>airplay</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="airplay" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>alert-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="alert-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>alert-octagon</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="alert-octagon" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>alert-triangle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="alert-triangle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>align-center</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="align-center" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>align-justify</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="align-justify" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>align-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="align-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>align-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="align-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>anchor</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="anchor" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>aperture</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="aperture" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>archive</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="archive" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-down</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-down" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-down-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-down-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-down-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-down-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-down-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-down-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-left-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-left-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-right-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-right-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-up</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-up" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-up-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-up-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-up-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-up-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>arrow-up-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="arrow-up-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>at-sign</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="at-sign" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>award</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="award" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>bar-chart</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="bar-chart" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>bar-chart-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="bar-chart-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>battery</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="battery" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>battery-charging</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="battery-charging" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>bell</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="bell" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>bell-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="bell-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>bluetooth</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="bluetooth" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>bold</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="bold" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>book</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="book" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>book-open</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="book-open" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>bookmark</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="bookmark" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>box</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="box" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>briefcase</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="briefcase" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>calendar</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="calendar" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>camera</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="camera" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>camera-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="camera-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cast</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cast" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>check</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="check" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>check-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="check-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>check-square</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="check-square" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevron-down</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevron-down" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevron-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevron-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevron-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevron-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevron-up</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevron-up" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevrons-down</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevrons-down" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevrons-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevrons-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevrons-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevrons-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chevrons-up</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chevrons-up" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>chrome</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="chrome" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>clipboard</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="clipboard" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>clock</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="clock" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cloud</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cloud" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cloud-drizzle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cloud-drizzle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cloud-lightning</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cloud-lightning" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cloud-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cloud-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cloud-rain</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cloud-rain" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cloud-snow</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cloud-snow" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>code</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="code" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>command</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="command" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>compass</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="compass" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>copy</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="copy" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-down-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-down-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-down-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-down-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-left-down</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-left-down" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-left-up</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-left-up" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-right-down</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-right-down" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-right-up</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-right-up" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-up-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-up-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>corner-up-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="corner-up-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>cpu</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="cpu" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>credit-card</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="credit-card" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>crop</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="crop" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>crosshair</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="crosshair" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>database</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="database" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>delete</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="delete" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>disc</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="disc" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>dollar-sign</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="dollar-sign" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>download</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="download" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>download-cloud</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="download-cloud" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>droplet</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="droplet" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>edit</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="edit" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>edit-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="edit-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>edit-3</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="edit-3" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>external-link</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="external-link" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>eye</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="eye" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>eye-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="eye-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>facebook</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="facebook" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>fast-forward</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="fast-forward" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>feather</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="feather" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>file</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="file" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>file-minus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="file-minus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>file-plus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="file-plus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>file-text</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="file-text" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>film</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="film" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>filter</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="filter" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>flag</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="flag" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>folder</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="folder" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>folder-minus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="folder-minus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>folder-plus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="folder-plus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>gift</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="gift" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>git-branch</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="git-branch" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>git-commit</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="git-commit" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>git-merge</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="git-merge" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>git-pull-request</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="git-pull-request" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>github</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="github" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>gitlab</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="gitlab" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>globe</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="globe" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>grid</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="grid" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>hard-drive</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="hard-drive" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>hash</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="hash" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>headphones</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="headphones" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>heart</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="heart" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>help-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="help-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>home</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="home" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>image</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="image" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>inbox</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="inbox" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>info</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="info" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>instagram</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="instagram" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>italic</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="italic" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>layers</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="layers" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>layout</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="layout" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>life-buoy</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="life-buoy" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>link</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="link" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>link-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="link-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>linkedin</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="linkedin" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>list</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="list" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>loader</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="loader" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>lock</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="lock" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>log-in</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="log-in" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>log-out</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="log-out" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>mail</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="mail" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>map</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="map" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>map-pin</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="map-pin" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>maximize</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="maximize" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>maximize-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="maximize-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>menu</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="menu" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>message-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="message-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>message-square</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="message-square" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>mic</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="mic" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>mic-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="mic-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>minimize</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="minimize" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>minimize-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="minimize-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>minus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="minus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>minus-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="minus-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>minus-square</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="minus-square" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>monitor</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="monitor" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>moon</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="moon" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>more-horizontal</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="more-horizontal" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>more-vertical</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="more-vertical" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>move</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="move" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>music</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="music" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>navigation</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="navigation" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>navigation-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="navigation-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>octagon</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="octagon" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>package</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="package" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>paperclip</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="paperclip" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>pause</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="pause" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>pause-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="pause-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>percent</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="percent" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>phone</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="phone" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>phone-call</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="phone-call" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>phone-forwarded</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="phone-forwarded" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>phone-incoming</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="phone-incoming" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>phone-missed</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="phone-missed" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>phone-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="phone-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>phone-outgoing</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="phone-outgoing" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>pie-chart</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="pie-chart" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>play</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="play" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>play-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="play-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>plus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="plus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>plus-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="plus-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>plus-square</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="plus-square" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>pocket</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="pocket" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>power</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="power" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>printer</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="printer" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>radio</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="radio" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>refresh-ccw</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="refresh-ccw" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>refresh-cw</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="refresh-cw" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>repeat</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="repeat" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>rewind</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="rewind" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>rotate-ccw</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="rotate-ccw" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>rotate-cw</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="rotate-cw" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>rss</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="rss" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>save</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="save" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>scissors</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="scissors" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>search</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="search" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>send</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="send" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>server</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="server" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>settings</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="settings" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>share</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="share" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>share-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="share-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>shield</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="shield" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>shield-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="shield-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>shopping-bag</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="shopping-bag" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>shopping-cart</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="shopping-cart" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>shuffle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="shuffle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>sidebar</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="sidebar" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>skip-back</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="skip-back" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>skip-forward</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="skip-forward" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>slack</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="slack" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>slash</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="slash" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>sliders</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="sliders" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>smartphone</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="smartphone" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>speaker</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="speaker" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>square</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="square" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>star</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="star" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>stop-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="stop-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>sun</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="sun" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>sunrise</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="sunrise" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>sunset</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="sunset" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>tablet</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="tablet" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>tag</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="tag" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>target</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="target" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>terminal</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="terminal" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>thermometer</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="thermometer" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>thumbs-down</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="thumbs-down" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>thumbs-up</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="thumbs-up" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>toggle-left</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="toggle-left" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>toggle-right</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="toggle-right" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>trash</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="trash" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>trash-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="trash-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>trending-down</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="trending-down" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>trending-up</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="trending-up" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>triangle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="triangle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>truck</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="truck" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>tv</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="tv" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>twitter</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="twitter" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>type</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="type" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>umbrella</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="umbrella" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>underline</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="underline" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>unlock</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="unlock" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>upload</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="upload" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>upload-cloud</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="upload-cloud" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>user</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="user" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>user-check</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="user-check" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>user-minus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="user-minus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>user-plus</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="user-plus" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>user-x</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="user-x" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>users</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="users" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>video</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="video" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>video-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="video-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>voicemail</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="voicemail" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>volume</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="volume" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>volume-1</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="volume-1" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>volume-2</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="volume-2" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>volume-x</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="volume-x" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>watch</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="watch" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>wifi</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="wifi" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>wifi-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="wifi-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>wind</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="wind" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>x</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="x" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>x-circle</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="x-circle" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>x-square</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="x-square" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>youtube</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="youtube" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>zap</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="zap" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>zap-off</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="zap-off" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>zoom-in</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="zoom-in" size="1em" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>zoom-out</Tooltip>}>
              <span className="position-relative me-4" {...props}>
                <FeatherIcon icon="zoom-out" size="1em" />
              </span>
            </OverlayTrigger>
          </div>
        </Card.Body>
        <Card.Footer className="bg-dark">
          <Highlight language="html" className="bg-dark mb-0">
            &lt;FeatherIcon&nbsp;icon=&quot;activity&quot;&nbsp;size=&quot;1em&quot;&nbsp;/&gt;
          </Highlight>
        </Card.Footer>
      </Card>
      <hr className="my-5" />
      <h2 className="mb-2">Property API</h2>
      <p className="text-muted mb-4">
        Please see the{' '}
        <a href="https://www.npmjs.com/package/feather-icons-react" target="_blank">
          official plugin documentation
        </a>{' '}
        for the detailed props API.
      </p>
      <Card className="bg-dark">
        <Card.Body>
          <Highlight language="javascript" className="bg-dark mb-0">
            import&nbsp;FeatherIcon&nbsp;from&nbsp;'feather-icons-react';
          </Highlight>
        </Card.Body>
      </Card>
    </div>
  );
}
