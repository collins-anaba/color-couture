SELECT users.username, users.email, users.PASSWORD
FROM users
INNER JOIN admin ON users.users_id = admins.users_id;