import styled from 'styled-components';

const CoursesMain = styled.div`
    margin-bottom: 60px;
`

const CoursesMainTitle = styled.h3`
    font-size: 0.875rem;
    line-height: 1.4;
    color: var(--quaternary-text-color);
    text-transform: uppercase;
    margin-bottom: 30px;
`

const CourseName = styled.li`
    font-size: 1.125rem;
    line-height: 1.1;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    color: var(--main-bg-color);
`

const CourseTotal = styled.span`
    color: var(--quaternary-text-color);
`

function GraduationCourses() {
    return (
        <CoursesMain>
            <CoursesMainTitle>Cursos Intensivos</CoursesMainTitle>
            <ul>
                <CourseName>UX Design & UI Design<CourseTotal>40h</CourseTotal></CourseName>
                <CourseName>Desenvolvimento Web Full Stack<CourseTotal>50h</CourseTotal></CourseName>
            </ul>
        </CoursesMain>
    )
}

export default GraduationCourses;