import { Pipe, PipeTransform } from '@angular/core';
import { Joke } from "./joke";

@Pipe({
  name: 'jokeFilter'
})
export class JokeFilterPipe implements PipeTransform {

  transform(data: Array<Joke>, args?: string): Array<Joke> {
    if(!args)
      return data;
    let filter = args;
    return data.filter(x => x.setup.includes(filter));
  }

}
