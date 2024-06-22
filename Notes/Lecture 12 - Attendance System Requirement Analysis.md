
### Agenda
- Functional Requirement Analysis
- Create A Basic SRS (Simple Requirement Specifications)
- Choose Technologies

### Client's Requirement
We need an attendance system. Students can create their own profiles. Admin can see a list of student and their attendance. Admin can enable and disable attend button. Also, this button can be disabled based on a timer. Each time admin enable attend button, students can participate only onece. Each day, students will have a timesheet of attendance
Student can see their own time logs and attend button when enabled

### Admin
- admin can create student
- admin can delete, update or check student information
- admin can change status of a student
- admin can check timesheet of a student
- admin can enable or disable autheticaton button
- admin can check statustics of a given day

### Student
- student can register themselves
- their will be followinig account status for a student
	- Pending
	- Active 
	- Reject
- user can login with their credentials
- pending and rejceted users won't have anything in their profie
- active users can update their profile information
	- first name
	- last name
	- email
	- phone number
	- profle picture
- active users can update their passwords
- active users can see their timesheet
	- calender view
	- list view
	- table view
- active users can participate in attendance system

### Requirement Analysis

#### Models:

- AdminAttendance
	- timeLimit
	- status
	- timestamps : true

- User
	- name
	- email
	- password
	- roles
	- accountStatus
- Profile
	- first name
	- last name
	- phone number
	- profile picture
	- userID
- StudentAttendance
	- userID
	- CreatedAt: DateTime

#### Endpoints:

**Student Endpoints:**
- post /auth/login [private]
- post /auth/register [public]
- patch /profiles [private]
- patch /profiles/avatar [private]
- put /auth/change-password [private]
- get /timesheet [private]
- get student/attendance [private]
- get /student/attendance/status [private]

**Admin Endpoints:**
- get /users [private]
- post /users [private]
- patch /users/:userID [private]
- delete /users/:userID [private]
- get /users/:userID [private]
- get /profiles [private]
- post /profiles [private]
- patch /profiles/:profileID [private]
- delete /profiles/:profileID [private]
- get /admin//attendance/enable [private]
- get /admin/attendance/disable [private]
- get /admin/attendance/status [private]
- get /timesheet/stats [private]
- get /timesheet/:userID [private]