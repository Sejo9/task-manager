package com.sejo.taskmanager.exceptions;

public class TaskRequestException extends RuntimeException {

    private final ExceptionType exceptionType;

    public TaskRequestException(String message, ExceptionType type) {
        super(message);
        this.exceptionType = type;
    }

    public ExceptionType getExceptionType() {
        return exceptionType;
    }
}
