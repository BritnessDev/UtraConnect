import { Col, Container, Row } from "react-bootstrap";
import {
    AnalyticsTotalHours,
    AnalyticsTrafficChannels,
    ProjectManagementActiveProjects,
    ProjectManagementBudget,
    ProjectManagementCostUnit,
    ProjectManagementHeader,
    ProjectManagementKanbanTasks,
    ProjectManagementLatestUploads,
    ProjectManagementProgress,
    ProjectManagementRecentActivity,
    ProjectManagementScratchpadChecklist,
} from "../widgets";

export default function ProjectManagement() {
    return (
        <div className="main-content">
            <ProjectManagementHeader />
            <Container fluid>
                <Row>
                    <Col xs={12} xl={8}>
                        <ProjectManagementActiveProjects />
                        <ProjectManagementKanbanTasks />
                        <Row>
                            <Col xs={12} lg={6}>
                                <ProjectManagementBudget />
                            </Col>
                            <Col xs={12} lg={6}>
                                <AnalyticsTotalHours />
                            </Col>
                            <Col xs={12} lg={6}>
                                <ProjectManagementProgress />
                            </Col>
                            <Col xs={12} lg={6}>
                                <ProjectManagementCostUnit />
                            </Col>
                        </Row>
                        <ProjectManagementScratchpadChecklist />
                    </Col>
                    <Col xs={12} xl={4}>
                        <ProjectManagementRecentActivity />
                        <ProjectManagementLatestUploads />
                        <AnalyticsTrafficChannels />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
