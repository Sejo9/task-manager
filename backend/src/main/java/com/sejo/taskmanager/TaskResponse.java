package com.sejo.taskmanager;

import org.bson.types.ObjectId;

public record TaskResponse (String id,
        String name,
         String description,
         TaskStatus status,
         String date,
         String time){}
