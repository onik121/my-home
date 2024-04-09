const Login = () => {
    return (
        <div className="hero flex flex-col items-center justify-center h-[600px]  max-w-[1440px] mx-auto px-5">
                <div className="flex items-center justify-center flex-col lg:flex-row-reverse p-0 w-full gap-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-black">Login your account</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Email</span>
                                </label>
                                <input type="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <div className="flex items-center">
                                    <input type="password" className="input input-bordered w-full" name="password" required />
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button className="bg-black text-white">Login</button>
                            </div>
                            {/* <p className="text-center mt-4">Dont’t Have An Account ? <Link to={'/register'}>Register</Link></p> */}
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;