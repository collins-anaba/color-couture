SELECT users.username, users.email, users.password
FROM users
INNER JOIN admin ON users.users_id = admin.users_id;