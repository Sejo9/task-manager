package com.sejo.taskmanager;

import com.sejo.taskmanager.exceptions.ExceptionType;
import com.sejo.taskmanager.exceptions.TaskRequestException;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public List<Task> allTasks(){
        return taskRepository.findAll();
    }

    public Task createTask(Task task){
        if(task.getName() == null){
            throw new TaskRequestException("name cannot be null", ExceptionType.NULL);
        }else {
            task.setStatus(TaskStatus.UNCOMPLETE);
            return taskRepository.save(task);
        }
    }

    public Task markTaskAsComplete(ObjectId id){
        return taskRepository.findById(id).map(task -> {
            task.setStatus(TaskStatus.COMPLETE);
            return taskRepository.save(task);
        }).orElseThrow(() -> new TaskRequestException("Could not find task with ID "+id, ExceptionType.NOT_FOUND));
    }

    public void deleteTask(ObjectId id){
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
        }else{
            throw new TaskRequestException("Could not find task with ID "+id, ExceptionType.NOT_FOUND);
        }
    }
}
