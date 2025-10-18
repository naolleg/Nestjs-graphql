import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
  ) {
    await this.authService.signup(email, password, name);
    return 'User created successfully';
  }

  @Mutation(() => String)
  async login(@Args('email') email: string, @Args('password') password: string) {
    const { access_token } = await this.authService.login(email, password);
    return access_token;
  }
}
