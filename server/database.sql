create database chat;

create table if not exists users(
    uid serial unique not null,
    primary key(uid)
);

create table if not exists messages(
    uid varchar(50) not null,
    cid serial not null,
    message text not null,
    date timestamp not null,
    foreign key(cid) references chatRoom,
    foreign key(username) references users
);

create table if not exists chatRoom(
    cid serial primary key,
    creationDate timestamp not null
);

create table if not exists members(
    cid serial,
    uid serial,
    foreign key(cid) references chatRoom,
    foreign key(uid) references users
);