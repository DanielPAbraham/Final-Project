from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class WorkoutA(db.Model):
    id = db.Column(db.Integer, primary_key=True) #always have this
    squat = db.Column(db.String(120), unique=True, nullable=False)
    bench = db.Column(db.String(80), unique=False, nullable=False)
    chinup = db.Column(db.String(80), unique=False, nullable=False)
    
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    # def __repr__(self):
    #     return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "squat": self.squat,
            "bench": self.bench,
            "chinup": self.chinup,
            # do not serialize the password, its a security breach
        }

class WorkoutB(db.Model):
    id = db.Column(db.Integer, primary_key=True) #always have this
    squat = db.Column(db.String(120), unique=True, nullable=False)
    overheadpress = db.Column(db.String(80), unique=False, nullable=False)
    deadlift = db.Column(db.String(80), unique=False, nullable=False)
    chinup = db.Column(db.String(80), unique=False, nullable=False)
    
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    # def __repr__(self):
    #     return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "squat": self.squat,
            "overheadpress": self.overheadpress,
            "deadlift": self.deadlift,
            "chinup": self.chinup,
            # do not serialize the password, its a security breach
        }
