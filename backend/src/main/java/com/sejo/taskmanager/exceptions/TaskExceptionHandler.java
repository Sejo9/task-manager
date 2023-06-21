package com.sejo.taskmanager.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TaskExceptionHandler {

    @ExceptionHandler(value = {TaskRequestException.class})
    public ResponseEntity<Object> handleTaskException(TaskRequestException e){
        HttpStatus status;

        if(e.getExceptionType() == ExceptionType.NOT_FOUND){
            status = HttpStatus.NOT_FOUND;
        } else {
            status = HttpStatus.BAD_REQUEST;
        }

        return new ResponseEntity<>(new TaskRequestError(e.getMessage()) , status);
    }
}
